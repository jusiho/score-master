import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../../components/Layout'
import NavBarCursos from '../../../components/NavBarCursos'
import CategoryCourse from '../../../components/category/category_course'

type Props = {
  category: string[]
  name_teacher:string
}

const index: NextPage<Props> = ({category,name_teacher})=>{
  return(
    <NavBarCursos category={category} name_teacher='haa'>
       <CategoryCourse courses_detail={category}/>
    </NavBarCursos>
)
}

export const getStaticProps: GetStaticProps = async (ctx) => { // runs server side
  // get api categories form database and show un navBarCursos component
  return {
    props:{
      category:['category1','category2','category3'],
      lastname:"gaaaa"
    }
  }
}

export default index