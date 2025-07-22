import Image from 'next/image';
import './XFinaceNews.css';

export default function XFinaceNews() {
    const items = [
        {
            src: '/images/contact2.png',
            alt: 'Item 1',
            overlayText: 'Chiều 10/12/2025 tại Hội Nghị quốc tế HYGH, X-Finance hợp tác với tập đoàn ABC đánh dấu bước ngoặt trong ngành ABC song',
            time: '12:20 12/12/2025'
        },
        {
            src: '/images/contact2.png',
            alt: 'Item 2',
            overlayText: 'Chiều 10/12/2025 tại Hội Nghị quốc tế HYGH, X-Finance hợp tác với tập đoàn ABC đánh dấu bước ngoặt trong ngành ABC song',
            time: '12:20 12/12/2025'
        },
        {
            src: '/images/contact2.png',
            alt: 'Item 3',
            overlayText: 'Chiều 10/12/2025 tại Hội Nghị quốc tế HYGH, X-Finance hợp tác với tập đoàn ABC đánh dấu bước ngoặt trong ngành ABC song',
            time: '12:20 12/12/2025'
        },
        {
            src: '/images/contact2.png',
            alt: 'Item 4',
            overlayText: 'Chiều 10/12/2025 tại Hội Nghị quốc tế HYGH, X-Finance hợp tác với tập đoàn ABC đánh dấu bước ngoặt trong ngành ABC song',
            time: '12:20 12/12/2025'
        },
        {
            src: '/images/contact2.png',
            alt: 'Item 5',
            overlayText: 'Chiều 10/12/2025 tại Hội Nghị quốc tế HYGH, X-Finance hợp tác với tập đoàn ABC đánh dấu bước ngoặt trong ngành ABC song',
            time: '12:20 12/12/2025'
        },
        {
            src: '/images/contact2.png',
            alt: 'Item 6',
            overlayText: 'Chiều 10/12/2025 tại Hội Nghị quốc tế HYGH, X-Finance hợp tác với tập đoàn ABC đánh dấu bước ngoặt trong ngành ABC song',
            time: '12:20 12/12/2025'
        },
    ];

    return (
        <header suppressHydrationWarning={false}>
 <div className='view-container'>
                <div className="txt-header"><span style={{ color: '#FF4142' }}>X-Finance</span> và khách hàng</div>
                <div className='scroll-container'>
                    {items.map((item, index) => (
                        <div key={index} className='item'>
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={400}
                                height={200}
                                className='img-scroll'
                            />
                            {item.overlayText && (
                                <div className='view-overlay'>
                                    <div className='txt-header-overlay'>
                                        {item.overlayText}
                                    </div>
                                    {item.time && (
                                        <div className='view-text-overlay'>
                                            <Image
                                                src={'/images/timeIcon.png'}
                                                alt="Image"
                                                width={24}
                                                height={24}
                                                className='time-icon'
                                            />
                                            <div className="text-overlay">{item.time}</div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </header>
           
    );
}
