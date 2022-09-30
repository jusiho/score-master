import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import NavBarCursos from '../../components/NavBarCursos'
import CategoryCourse from '../../components/category/category_course'
import { GetStaticPaths, GetStaticProps } from 'next';

type Props = {
  courses_detail:string[]
  category: string[]
  name_teacher:string
}

const Category: NextPage<Props> = ({category,courses_detail,name_teacher})=>{
  const router = useRouter();
  console.log(router)
  return(
    <NavBarCursos category={category} name_teacher='haa'>
      <h1>USER: {router.query.id}</h1>
      <h2>GAAAA: {category}</h2>
      <CategoryCourse courses_detail={courses_detail}/>
    </NavBarCursos>
  )
}

export const getStaticPaths: GetStaticPaths  = async (ctx) =>{
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => { //EJECUTA DEL LADO DEL SERVIDOR
  // consumir api
  // Show all courses from category 

  return {
    props:{
      category:['category1','category2','category3'],
      name_teacher:"gaaaa",
      courses_detail:[
          {name:'programacion en python',teacher_name:'pierre blas'},
          {name:'programacion en rubik',teacher_name:'Carlo blas'},
          {name:'programacion en javascri',teacher_name:'Michael'},
          {name:'programacion en javascri',teacher_name:'Michael'},
          {name:'programacion en javascri',teacher_name:'Michael'},
          {name:'programacion en javascri',teacher_name:'Michael'}]
    }
  }
}

export default Category