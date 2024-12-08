import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import styles from './SearchBar.module.css'; // Import CSS module

export default function SearchBar() {
    return (
        <div className={styles.inputContainer}>
            {/* Search Icon */}
            <div className={styles.icon}>
                <Image
                    src="/images/icons/search-normal.png" // Use Next.js Image component for optimization
                    alt="Search Icon"
                    width={16} // Adjust icon size
                    height={16}
                />
            </div>

            {/* Input Field */}
            <input
                type="text"
                className={styles.input}
                placeholder="Search something here"
            />

            {/* Settings Icon */}
            <div className={styles.settingsIcon}>
                <Image
                    src="/images/icons/filter.png" // Use Next.js Image component for optimization
                    alt="Filter Icon"
                    width={16} // Adjust icon size
                    height={16}
                />
            </div>
        </div>
    );
}
