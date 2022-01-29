import React, { useRef } from 'react';
import { useCycle, motion } from 'framer-motion';
import * as styles from './Sidebar.module.scss';
import SidebarNav from './SidebarNav';
import useDimensions from '../../services/use-dimensions';
import HamburgerButton from '../HamburgerButton';

const sidebar = {
    open: (height = 1000) => {
        return {
            clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
            transition: {
                type: 'spring',
                stiffness: 20,
                restDelta: 2,
            },
        };
    },
    closed: {
        clipPath: 'circle(30px at 260px 30px)',
        transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
};
const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};
const Sidebar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    return (
        <motion.div
            className={styles.sidebar}
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            variants={{
                open: { zIndex: 2 },
                closed: { zIndex: 1, transition: { zIndex: { delay: 2 } } },
            }}
            custom={height}
            ref={containerRef}
        >
            <motion.div className={styles.background} variants={sidebar} />
            <motion.div>
                <motion.ul className={styles.content} variants={variants}>
                    <SidebarNav />
                </motion.ul>
            </motion.div>
            <HamburgerButton toggleOpen={toggleOpen} />
        </motion.div>
    );
};
export default Sidebar;
