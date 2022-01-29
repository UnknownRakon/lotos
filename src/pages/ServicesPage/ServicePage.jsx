import * as styles from './Services.module.scss';
import array from './array';

const ServicePage = () => {
    return (
        <div>
            <h2 className={styles.h2}>Наши услуги</h2>
            <div className={styles.services}>
                {array.map((item) => {
                    const { id } = item;
                    return (
                        <div key={id} className={styles.service}>
                            <img
                                className={styles.image}
                                src={item.image}
                                alt={item.heading}
                            />
                            <h3 className={styles.heading}>{item.heading}</h3>
                            <p className={styles.description}>
                                {item.description}
                            </p>
                            <p className={styles.cost}>
                                <span className={styles.span}>{item.cost}</span>
                                {item.type}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default ServicePage;
