import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DetailIdContextProvider } from './contexts/detailIdContext'
import { DetailPopContextProvider } from './contexts/detailOpen-closeContext'
import { GetDataContextProvider } from './contexts/FetchDataContext'
import { SearchInputContextProvider } from './contexts/SearchInputContext'
import { SetDetailContextProvider } from './contexts/setDetailDataContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GetDataContextProvider>
      <DetailIdContextProvider>
        <SetDetailContextProvider>
          <DetailPopContextProvider>
            <SearchInputContextProvider>
                 <App/>  
            </SearchInputContextProvider>
            
          </DetailPopContextProvider>      
       </SetDetailContextProvider>
      </DetailIdContextProvider>
    </GetDataContextProvider>
  </React.StrictMode>
)
