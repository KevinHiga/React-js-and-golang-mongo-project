import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BookssList.css';

class BookssListItem extends React.Component {
    render() {
      return (
        <div className="BookssListItem">
            <img src={this.props.book.avatarUrl} alt="" className="BookssListItem__avatar"/>
            <div>
                <div><strong>{this.props.book.name}</strong></div>
                <div>
                    {this.props.book.direction}
                </div>
                <div>{this.props.book.year}</div>
            </div>
        </div>
      );
    }
  }

  function useSearchBookss(bookss) {
    const [query, setQuery] = React.useState('');
    const [filteredBookss, setFilteredBookss] = React.useState(bookss);
  
    React.useMemo(() => {
      const result = bookss.filter(books => {
        return `${books.name}`
          .toLowerCase()
          .includes(query.toLowerCase());
      });
  
      setFilteredBookss(result);
    }, [bookss, query]);
  
    return { query, setQuery, filteredBookss };
  }

  function BookssList (props) {
    const bookss = props.bookss;
    const { query, setQuery, filteredBookss } = useSearchBookss(bookss);
        if (filteredBookss.length === 0) {
          return (
            <div>
              <div className="form-group">
                <label>Filter Library</label>
                <input
                  type="text"
                  className="form-control"
                  value={query}
                  onChange={e => {
                    setQuery(e.target.value);
                  }}
                />
              </div>
              <h3>No librarys were found</h3>
              <Link className="btn btn-primary" to="/bookss/new">
                Create new bookss
              </Link>
            </div>
          );
        }
        return (
            <div className="BookssList Bookss__container-tamanio">
            <div className="form-group">
              <label>Filter Library</label>
              <input
                type="text"
                className="form-control"
                value={query}
                onChange={e => {
                  setQuery(e.target.value);
                }}
              />
            </div>
                <ul className="list-unstyled BookssList">
                    {filteredBookss.map((book) => {
                        return (
                            <li key={book._id}>
                                
                                <Link
                                className="text-reset text-decoration-none"
                                to={`/bookss/${book._id}`}
                                >
                                <BookssListItem book={book} />
                                </Link>
                                
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    
}

export default BookssList;