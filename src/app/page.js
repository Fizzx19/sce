'use client';
import { Marquee } from '@/components'
import { useState } from 'react'

export default function Home() {

    const [search, setSearch] = useState(false)
    const [query, setQuery] = useState('')

    const handleSubmit = async (event) => {

        event.preventDefault();

        setQuery(event.target.query.value)
        setSearch(true)

        setTimeout(() => {
            setSearch(false)
        }, 9000);
    }

    return (
        <div className="h-screen grid grid-cols-3 gap-3 content-center bg-gray-50">
            <div className="mx-auto col-span-3 lg:w-2/5 w-4/5">

                <div className="text-3xl font-bold space-x-2 mb-5 text-center">
                    <span className="text-red-500">G</span>
                    <span className="text-violet-500">a</span>
                    <span className="text-purple-500">t</span>
                    <span className="text-sky-500">o</span>
                    <span className="text-blue-700">t</span>
                    <span className="text-sky-300">K</span>
                    <span className="text-green-500">a</span>
                    <span className="text-yellow-500">c</span>
                    <span className="text-red-500">a</span>
                    <span className="italic text-4xl text-gray-500"> !</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="relative flex items-center w-full h-12 rounded-full shadow-lg bg-white overflow-hidden border">

                        <div className="grid place-items-center h-full w-12 text-gray-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>

                        <input className="peer h-full w-full outline-none text-sm text-gray-700 pr-2" type="text" name="query" id="query" placeholder="Search something ..." />

                    </div>
                </form>

                {search &&
                    <>
                        <div className='mt-5'>
                            <span className='text-sm text-gray-500'>Hasil pencariaan dari : {query}</span>
                        </div>
                        <div className='mt-5'>
                            <Marquee>Yo Ndak Tau, Kok Tanya Saya.</Marquee>
                        </div>
                    </>
                }

            </div>

        </div>
    )
}
