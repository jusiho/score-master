import Link from "next/link";
import type { NextPage } from 'next'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router';

type Props = {
    courses_detail: Array<any>
  };
  
const CategoryCourse: NextPage<Props> = ({courses_detail})=>{
const router = useRouter();
var ga = '1'
var url='/cursos/'+ga
return(
    <main className="min-h-screen w-full bg-white border-l">
    <nav className="flex items-center justify-between px-10 bg-white py-6 border-b">
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md space-x-3 w-96">
            <input type="text" placeholder="search" className="bg-gray-100 outline-none w-full" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer text-gray-500" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
        <div className="flex items-center space-x-4">
            <img className="w-8 rounded-full" src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f7703994b69d48ca802df55729a2325c_xl.jpg" alt="Elon Musk" />
            <p className="hidden md:block">Elon Musk</p>
        </div>
    </nav>
    <div className="mx-6">
        <h1 className="my-6 text-3xl">Categoria</h1>
        <div className="md:flex  space-y-3 md:space-y-0 md:space-x-4 mt-6">
            <div className="h-90 bg-gradient-to-r rounded-md from-indigo-600 to-purple-600 p-10">
                <p className="text-3xl font-thin text-indigo-50 cursor-pointer">How to do Basic Jumping and how to
                    landing safely</p>
                <div className="flex items-center mt-4 space-x-4">
                    <img className="w-10 h-10 rounded-full cursor-pointer" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                    <div>
                        <h3 className="text-indigo-50 font-semibold cursor-pointer">Thomas Hope</h3>
                        <p className="text-indigo-50 text-sm font-thin">53K views • 2 weeks ago</p>
                    </div>
                </div>
            </div>
            <div className="h-90 bg-gradient-to-r rounded-md from-indigo-600 to-purple-600 p-10">
                <p className="text-3xl font-thin text-indigo-50 cursor-pointer">How to do Basic Jumping and how to
                    landing safely</p>
                <div className="flex items-center mt-4 space-x-4">
                    <img className="w-10 h-10 rounded-full cursor-pointer" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />
                    <div>
                        <h3 className="text-indigo-50 font-semibold cursor-pointer">Thomas Hope</h3>
                        <p className="text-indigo-50 text-sm font-thin">53K views • 2 weeks ago</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="mx-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {
        courses_detail.map(record => {
          return(
          <li className="flex space-x-2 mt-10 cursor-pointer hover:text-[#EC5252] duration-150">
          <Link href={{
                pathname: url
            }}>
              <div className="shadow-lg rounded-t-md overflow-hidden ">
                <div className="">
                    <div className="p-2 relative">
                        <p className="text-lg mt-6 font-semibold">{record.name}</p>
                        <p>{record.teacher_name}</p>
                    </div>
                </div>
            </div>
            </Link>
          </li>
          );
        })
        }
    </div>
</main>
)
}
  
  export default CategoryCourse
  