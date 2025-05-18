import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistograms, fetchDocuments, loadMoreDocuments } from '../../utils/searchSlice';
import SearchForm from '../../components/SearchForm/SearchForm';
import SearchResults from '../../components/SearchResults/SearchResults';
import './Search.css';

export default function SearchPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { histograms, documents, total, status } = useSelector((state) => state.search);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  const handleSearch = (searchData) => {
    dispatch(fetchHistograms(searchData))
      .unwrap()
      .then(() => setShowResults(true));
  };

  const handleLoadMore = () => {
    dispatch(loadMoreDocuments());
  };

  return (
    <div className="search-page">
      {!showResults && <SearchForm onSubmit={handleSearch} />}
      
      {showResults && (
        <>
          <button onClick={() => setShowResults(false)} className="back-button">
            ← Новый поиск
          </button>
          
          <SearchResults 
            histograms={histograms}
            documents={documents}
            status={status}
            onLoadMore={handleLoadMore}
            hasMore={documents.length < total}
          />
        </>
      )}
    </div>
  );
}
