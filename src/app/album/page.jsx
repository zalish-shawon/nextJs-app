import Image from 'next/image';
import React from 'react';

const AlbumImages = () => {
    return (
        <div>
            <h1>This is Next.js logo</h1>
            <Image src="https://logowik.com/content/uploads/images/nextjs2106.logowik.com.webp" width={500} height={500} alt='Next.js logo'/>
        </div>
    );
};

export default AlbumImages;
