import HeaderImageLayout from '@/components/molecules/HeaderImageLayout';
import './StyleNews.css';
import FeatureNews from '@/components/newsmodules/FeatureNews';
import XfinanceNews from '@/components/newsmodules/XFinanceNews';

export default function NewsPage() {
    return (
        <HeaderImageLayout imageHead="/images/support/support-header.png">
            <FeatureNews />
            <XfinanceNews />
        </HeaderImageLayout>
    );
}
