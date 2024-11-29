import React from 'react'
import TrendViewDesktop from './trendViewDesktop/TrendViewDesktop'
import TrendViewSidebar from './trendViewSidebar/TrendViewSidebar'
import TrendHeader from './trendHeader/TrendHeader'

const TrendView = () => {
  return (
    <>
    <div className='pt-3'>
      <TrendHeader />
    </div>
    <div className='row pt-3'>
        <div className='col-9'>
            <TrendViewDesktop />
        </div>
        <div className='col-3'>
            <TrendViewSidebar />
        </div>
    </div>
    </>
  )
}

export default TrendView