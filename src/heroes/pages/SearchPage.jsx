import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'

import { HeroCard } from '../components'
import { getHeroesByName } from '../helpers';
import { useForm } from '../../hooks/useForm';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse( location.search );

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if(searchText.trim().length < 1) return

    navigate(`?q=${ searchText }`)
  }
  return (
    <>
      <h1>Buscar</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Busqueda</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input 
            type="text"
            placeholder="Buscar heroe"
            className="form-control" 
            name="searchText"
            autoComplete="off"
            value={ searchText }
            onChange={ onInputChange }
            />
            <button className="btn btn-primary mt-2">
              Search
            </button>
          </form>
        </div>
        <br />
        <div className="col-7">
        <h4>Resultados</h4>
        <hr />

          <div className="alert alert-primary">
            Buscar heroe
          </div>
          <div className="alert alert-danger">
            No hay resultados para <b>{ q }</b>
          </div>
          {
              heroes.map( hero => (
                <HeroCard key={ hero.id } {...hero}/>
              ))
          }
        </div>
      </div>

    </>
  )
}