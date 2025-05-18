import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import './SearchForm.css';

export default function SearchForm({ onSubmit }) {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [dateError, setDateError] = useState('');
  
  const validateDates = (startDate, endDate) => {
    if (new Date(startDate) > new Date(endDate)) {
      setDateError('Дата начала не может быть позже даты окончания');
      return false;
    }
    setDateError('');
    return true;
  };

  const submitHandler = (data) => {
    if (!validateDates(data.startDate, data.endDate)) return;
    
    const formattedData = {
      issueDateInterval: {
        startDate: data.startDate,
        endDate: data.endDate
      },
      searchContext: {
        targetSearchEntitiesContext: {
          targetSearchEntities: [{
            type: "company",
            inn: data.inn,
            maxFullness: data.maxFullness
          }]
        }
      },
      tonality: data.tonality,
      riskFactors: data.riskFactors,
      techNews: data.techNews,
      announcements: data.announcements,
      digests: data.digests,
      limit: data.limit
    };
    
    onSubmit(formattedData);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="search-form">
      <div className="form-group">
        <label>ИНН компании*</label>
        <input
          {...register('inn', {
            required: 'Обязательное поле',
            pattern: {
              value: /^\d{10,12}$/,
              message: 'ИНН должен содержать 10 или 12 цифр'
            }
          })}
          className={errors.inn ? 'error' : ''}
        />
        {errors.inn && <span className="error-message">{errors.inn.message}</span>}
      </div>

      <div className="form-group">
        <label>Дата начала*</label>
        <input
          type="date"
          {...register('startDate', { required: 'Обязательное поле' })}
          className={errors.startDate ? 'error' : ''}
        />
        {errors.startDate && <span className="error-message">{errors.startDate.message}</span>}
      </div>

      <div className="form-group">
        <label>Дата окончания*</label>
        <input
          type="date"
          {...register('endDate', { required: 'Обязательное поле' })}
          className={errors.endDate ? 'error' : ''}
        />
        {errors.endDate && <span className="error-message">{errors.endDate.message}</span>}
      </div>

      <div className="form-group">
        <label>Тональность*</label>
        <select
          {...register('tonality', { required: true })}
          defaultValue="any"
        >
          <option value="positive">Позитивная</option>
          <option value="negative">Негативная</option>
          <option value="any">Любая</option>
        </select>
      </div>

      <div className="checkbox-group">
        <label>
          <input type="checkbox" {...register('maxFullness')} />
          Максимальная полнота
        </label>
        <label>
          <input type="checkbox" {...register('riskFactors')} />
          Только с риск-факторами
        </label>
        <label>
          <input type="checkbox" {...register('techNews')} />
          Технические новости
        </label>
        <label>
          <input type="checkbox" {...register('announcements')} />
          Анонсы и календари
        </label>
        <label>
          <input type="checkbox" {...register('digests')} />
          Сводки новостей
        </label>
      </div>

      <div className="form-group">
        <label>Количество документов (1-1000)*</label>
        <input
          type="number"
          min="1"
          max="1000"
          {...register('limit', {
            required: 'Обязательное поле',
            min: { value: 1, message: 'Минимум 1' },
            max: { value: 1000, message: 'Максимум 1000' }
          })}
          className={errors.limit ? 'error' : ''}
        />
        {errors.limit && <span className="error-message">{errors.limit.message}</span>}
      </div>

      {dateError && <div className="error-message">{dateError}</div>}

      <Button
        type="submit"
        text="Поиск"
        className="search-button"
        disabled={Object.keys(errors).length > 0}
      />
    </form>
  );
}
