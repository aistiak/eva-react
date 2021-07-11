import React ,{useEffect} from "react";
import "./card.css"
import { gql, useQuery } from "@apollo/client";

// @ts-ignore
export default function Detail({setParentState,reponame,owner}) {
  const QUERY = gql`
  {
    repository(owner: "${owner}", name: "${reponame}") {
      name
      stargazerCount,
      object(expression:"master") {
        ... on Commit {
          history {
            totalCount
          }
        }
      }
      stargazers(first: 5) {
        nodes {
          name
        }
      }
    }
  }
  `;
  const { loading, error, data } = useQuery(QUERY);
  useEffect(()=>{
    console.log(data)
  },[data])
  if(loading) return <h1> loading...</h1>

  return (
    <div className="u-body">
      <section
        className="u-clearfix u-palette-5-dark-1 u-section-2"
        id="sec-466f"
      >
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="u-container-style u-group u-palette-5-dark-2 u-radius-18 u-shape-round u-group-1">
            <div className="u-container-layout u-container-layout-1">
              <h5 onClick={() => setParentState({page:0})} className="u-custom-font u-font-montserrat u-text u-text-default u-text-grey-25 u-text-1" style={{cursor:'pointer'}}>
               Back 
              </h5>
              <h5 className="u-custom-font u-font-montserrat u-text u-text-default u-text-grey-25 u-text-1">
                Repo Name: 
              </h5>
              <h5 className="u-custom-font u-font-montserrat u-text u-text-default u-text-white u-text-2">
                {data?.repository?.name}
              </h5>
              <h5 className="u-custom-font u-font-montserrat u-text u-text-default u-text-grey-25 u-text-3">
                No of Stars:
              </h5>
              <h5 className="u-custom-font u-font-montserrat u-text u-text-default u-text-white u-text-4">
                {data?.repository?.stargazers?.nodes?.length}
              </h5>
              <h5 className="u-custom-font u-font-montserrat u-text u-text-default u-text-grey-25 u-text-5">
                Top 5 Star Gazers:
              </h5>
              {
                // @ts-ignore
                data?.repository?.stargazers?.nodes?.map( v => (
                  <>
                    <h5 className="u-custom-font u-font-montserrat u-text u-text-default u-text-grey-25 u-text-6">
                      Username:
                    </h5>
                    <h5 className="u-custom-font u-font-montserrat u-text u-text-default u-text-white u-text-7">
                      {v.name}
                    </h5>
                  </>
                ))
              }
   
              <h5 className="u-custom-font u-font-montserrat u-text u-text-default u-text-grey-25 u-text-16">
                Total no of Commits:
              </h5>
              <h5 className="u-custom-font u-font-montserrat u-text u-text-default u-text-white u-text-17">
                 {data?.repository?.object?.history?.totalCount}
              </h5>
            </div>
          </div>
          
         
        </div>
      </section>
    </div>
  );
}
