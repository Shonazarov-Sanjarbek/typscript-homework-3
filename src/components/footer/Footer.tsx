import { FC } from 'react';

interface FooterProps {
    links: string[];
    resources: string[];
}

const Footer: FC<FooterProps> = ({ links, resources }) => {
    
    const footerLinks = links?.map((li: string, inx: number) => (
        <li key={inx}>
            <a href="" className="hover:text-yellow-400">{li}</a>
        </li>
    ))
    const footerResources = resources?.map((li: string, inx: number) => (
        <li key={inx}>
            <a href="" className="hover:text-yellow-400">{li}</a>
        </li>
    ))

    return (
        <footer className="py-8">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-yellow-500 mb-4">Main</h2>
                    <p className="text-sm mb-4">
                        We provide the best products at affordable prices with a focus on customer satisfaction.
                    </p>
                    <p className="text-sm">&copy; 2024 All Rights Reserved.</p>
                </div>


                <div>
                    <h3 className="text-xl font-semibold text-yellow-300 mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {footerLinks}
                    </ul>
                </div>


                <div>
                    <h3 className="text-xl font-semibold text-yellow-300 mb-4">Resources</h3>
                    <ul className="space-y-2">
                       {footerResources}
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                <p className="text-sm">&copy; 2024 All Rights Reserved | Company Name</p>
            </div>
        </footer>
    );
};

export default Footer;