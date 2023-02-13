import { NextPage } from 'next'
import { Calc } from '../calc'
const Home: NextPage = () => {
  return (
    <div className='
    flex
    flex-col
    min-h-screen
    h-14
    bg-gradient-to-r from-violet-500/60 to-fuchsia-500/60
    bg-cover
    bg-no-repeat
    overflow-hidden
    '>
      <main className='flex flex-1 items-center justify-center'>
        <Calc />
      </main>
    </div>
  )
}
export default Home
