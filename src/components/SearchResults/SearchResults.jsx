import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDocumentIds, fetchDocumentsBatch } from '../../utils/searchSlice';
import HistogramCarousel from '../HistogramCarousel/HistogramCarousel';
import DocumentsTable from '../DocumentsTable/DocumentsTable';
import './SearchResults.css';

export default function SearchResults({ histograms, documents, status, onLoadMore, hasMore }) {
  const dispatch = useDispatch();
  const { documentIds, searchParams } = useSelector((state) => state.search);

  useEffect(() => {
    if (histograms.length > 0) {
      dispatch(fetchDocumentIds(searchParams));
    }
  }, [histograms, dispatch, searchParams]);

  useEffect(() => {
    if (documentIds.length > 0) {
      dispatch(fetchDocumentsBatch({ ids: documentIds, offset: 0 }));
    }
  }, [documentIds, dispatch]);

  return (
    <div className="search-results">
      <HistogramCarousel data={histograms} />
      
      <DocumentsTable documents={documents} />
      
      {status === 'loading' && <div className="loader">Загрузка...</div>}
      
      {hasMore && status !== 'loading' && (
        <button onClick={onLoadMore} className="load-more">
          Показать ещё
        </button>
      )}
    </div>
  );
}
