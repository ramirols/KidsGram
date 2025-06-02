import Header from './Header';
import Footer from './Footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
                <main className='pt-[71px]'>
                    {children}
                </main>
            <Footer />
        </>
    );
}