import css from './Statistics.module.css';
import PropTypes from "prop-types";


export const Statistics = ({title, stats}) => {
    return (
        <section>
        {title && <h2 className={css.statTitle}>{title}</h2>}
        <ul className={css.statList}>
            
            {stats.map(({ id, label, percentage }) => 
            <li className={css.statItem} key= {id}>
                <span className={css.statLabel}>{label}</span>
                <span className={css.statPerc}>{percentage}%</span>
            </li>
            )}
        </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    })) 
};