import clsx from 'clsx';
import React from 'react';
import Image from 'next/image';

const ItemLayout = ({ children, className }) => {
    return (
        <div className={clsx("custom-bg p-8 rounded-xl flex items-center justify-center space-y-8", className)}>
            {children}
        </div>
    );
};

const AboutDetails = () => {
    return (
        <section className='py-20 w-full'>
            <div className='grid grid-cols-12 gap-8 w-full'>

                <ItemLayout className='col-span-8 row-span-2 flex-col items-start'>
                    <h2 className='font-semibold text-4xl text-left w-full capitalize text-accent'>
                        Info
                    </h2>
                    <p className='font-light'>
                        I&apos;m Subhanjan Baral, a Computer Science and Mathematics major at Gettysburg College with a strong foundation in object-oriented programming, data structures, and algorithms. I bring hands-on experience from roles as a Peer Learning Associate and Student Lead, where I&apos;ve supported students academically and led operational teams. I&apos;m passionate about technology, education, and community engagement, as shown through my work as a private tutor and co-founder of Techniteracy, where I organized digital safety seminars for high schoolers. I&apos;m also skilled in Java, Python, JavaScript, and front-end development, and I thrive in collaborative, fast-paced environments.
                    </p>
                </ItemLayout>

                <ItemLayout className='col-span-4 text-accent'>
                    <p className='font-semibold w-full text-center text-4xl'>
                        CS, Math Double Major
                    </p>
                </ItemLayout>

                <ItemLayout className='col-span-4 text-accent'>
                    <p className='font-semibold w-full text-center text-4xl'>
                        Data Science Minor
                    </p>
                </ItemLayout>

                <ItemLayout className='col-span-full'>
                    <Image
                        className='w-full h-auto'
                        src="https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarr"
                        alt="Subhanjan"
                        width={1000}
                        height={300}
                        loading="lazy"
                    />
                </ItemLayout>

            </div>
        </section>
    );
};

export default AboutDetails;
