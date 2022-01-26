import React, { useEffect } from 'react';
import * as styles from './News.module.scss';

const News = () => {
    // const [vkLoaded, setVkLoaded] = useState(false);
    useEffect(() => {
        window.VK.Widgets.Group(
            'vk_groups',
            { mode: 4, width: 'auto', height: '800' },
            208980239
        );
    }, []);
    return (
        <div className={styles.wrapper}>
            <div id="vk_groups" className={styles.vk_group} />
        </div>
    );
};
export default News;
