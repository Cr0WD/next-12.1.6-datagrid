import type { NextPage } from 'next'
import Table from '../Table'
import { Box } from '@mui/material'

const Home: NextPage<{
  [key: string]: number
}> = ( {
         page,
         pageSize,
       } ) => {
  return (
    <Box sx={{ m: 'auto', width: 1000, mt: 10 }}>
      <Table {...{
        page,
        pageSize,
      }}/>
    </Box>
  )
}

export async function getServerSideProps() {

  return {
    props: {
      page: 0,
      pageSize: 5,
    },
  }
}

export default Home
