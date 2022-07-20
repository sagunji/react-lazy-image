import { FC } from 'react';

interface ILazyImageProps {
    source: string;
    [key: string]: any;
}

declare const LazyImage: FC<ILazyImageProps>;

export { LazyImage };
