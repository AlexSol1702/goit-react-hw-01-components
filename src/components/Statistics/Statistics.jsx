import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export function Statistics({ title, stats }) {
  const colorItem = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`; //---  << Случайный цвет >>
  };
  return (
    <div className="container">
      <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.list}>
          {stats.map(({ id, label, percentage }) => (
            <li
              className={styles.item}
              style={{ backgroundColor: colorItem() }}//---  << Добавл backgroundColor помимо основого styles >>
              key={id}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
