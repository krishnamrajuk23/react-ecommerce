import '../../scss/sizing.scss';
import './Search.scss';

type WidthType = 'md' | 'sm' | 'lg' | 'xl';

interface SearchProps {
  placeholder?: string,
  handleEvent: Function,
  width?: WidthType
}

function Search({ placeholder, handleEvent, width = 'md' }: SearchProps) {
  width = width || 'md';
  return (
    <input className={`search-input min-w-${width}`} type='Search' placeholder={placeholder} onChange={(e) => handleEvent(e)}/>
  )
}

export default Search;