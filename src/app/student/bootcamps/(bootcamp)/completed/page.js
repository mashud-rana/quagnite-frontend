"use client";
import IcCard from "@/components/Share/IcCard/IcCard";
import React, { useState, useEffect  } from "react";
import {useGetBootcampQuery} from '@/redux/features/student/bootcamp/bootcampApi';
import { pre } from "framer-motion/client";
import SectionSpinner from "@/components/Spinner/SectionSpinner";
import InfiniteScroll from "react-infinite-scroll-component";
import NotDataFound from "@/components/Empty/NotDataFound";
import  BootcampCardSkeleton from "@/components/Student/Bootcamps/Skeleton/ListCard/BootcampCardSkeleton ";

const CompletedPage = () => {
  const [bootcamps, setBootcamps] = useState([]);
     const [totalPages, setTotalPages] = useState(1);
     const [page, setPage] = useState(1);
     //get bootcamps
     const { 
     data,
     isSuccess, 
     isLoading, 
     error, 
     refetch,
     isFetching 
     } = useGetBootcampQuery({ page, type:'complete', params: {per_page:10} });
    //scroll fetch
    const fetchMoreData = () => {
       if (page < totalPages) {
         setPage(page + 1)
       }
     };
     //set bootcamps
     useEffect(()=>{
       if(isSuccess && data?.data?.data){
         if(page === 1){
           setBootcamps([...data?.data?.data])
           setTotalPages(data?.data?.meta?.last_page || 1)
         }else{
           setBootcamps((prevBootcamps) => [...prevBootcamps, ...data?.data?.data])
         }
       }
     },[isSuccess, data])
   
   
   return (
       <div >
       {
         isLoading && page === 1 ? 
         (
          //  <SectionSpinner message="Loading complete Bootcamp" />
          <BootcampCardSkeleton />
         )
         : error ? (
           <div style={{ textAlign: "center", marginTop: "20px" }}>
             <NotDataFound message='Error loading bootcamps. Please try again' />
             <button onClick={() => refetch()} className="ic_common_primary_btn">
               Retry
             </button>
           </div>
         )
         : (
            <InfiniteScroll
               dataLength={bootcamps.length}
               next={fetchMoreData}
               hasMore={page < totalPages}
               loader={<p className="text-center">Loading more...</p>}
               endMessage={
                   <p style={{ textAlign: "center", marginTop: "10px" }}>
                    {
                      bootcamps.length > 0 &&   <b>No more complete bootcamp</b>
                    }
                 
                   </p>
               }
               >
                {
                   bootcamps.length > 0 ? (
                    <div className="ic_grid2">
                      {
                        bootcamps.map((bootcamp) => (
                          <IcCard card={bootcamp} key={bootcamp.id} />
                        ))
                      }
                    </div>

                   ) : !isLoading && (
                      
                       <NotDataFound message=' No bootcamps available at the moment.' />
                     )
                }
                
                 
               </InfiniteScroll>
          
         )
       }
 
       
       {/* {bootcamps.length > 0 && bootcamps.map((bootcamp, index) => (
         <IcCard card={bootcamp} key={bootcamp.id} />
       ))} */}
       {/* {smallCards.map((card, index) => (
         <IcCard card={card} key={index} />
       ))} */}
     </div>
   );
};

export default CompletedPage;
