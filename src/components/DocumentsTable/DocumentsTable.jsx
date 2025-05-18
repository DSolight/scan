import './DocumentsTable.css';

export default function DocumentsTable({ documents }) {
  return (
    <table className="documents-table">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Заголовок</th>
          <th>Источник</th>
          <th>Тональность</th>
          <th>Ссылка</th>
        </tr>
      </thead>
      <tbody>
        {documents.map((doc) => (
          <tr key={doc.id}>
            <td>{new Date(doc.issueDate).toLocaleDateString()}</td>
            <td>{doc.title.text || 'Без названия'}</td>
            <td>{doc.source.name}</td>
            <td className={`tonality-${doc.attributes.tonality}`}>
              {doc.attributes.tonality}
            </td>
            <td>
              <a href={doc.url} target="_blank" rel="noopener noreferrer">
                Открыть
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
