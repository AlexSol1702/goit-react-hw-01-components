import PropTypes from 'prop-types';
import css from "./Statistics.module.css";


export  function Statistics({title, stats}) { 
  const colorItem =()=> {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }
    return (
        <div className="container">
          <section className={css.statistics}>
          <h2 className={css.title}>{title && (title)}</h2>

          <ul className={css.list}>
             {stats.map
              (({id, label, percentage}) => 
                  <li className={css.item} style={{backgroundColor: colorItem()}} key={id}>
                  <span className={css.label}>{label}</span>    
                  <span className={css.percentage}>{percentage}%</span>
                </li>                 
              )}    
          </ul>
        </section>
        </div>
    )
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
   
}

