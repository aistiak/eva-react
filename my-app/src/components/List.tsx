import React, { useEffect, useState } from "react";
import "./Home.css";
import { gql, useQuery } from "@apollo/client";


// @ts-ignore
export default function List({ setParentState}) {
  const [state, setState] = useState({
    user: `aistiak`,
    url: ``,
  });

  const QUERY = gql`
  query { 
    user(login:"${state.user}"){
        name ,
          repositories(first:100) {
        totalCount ,
          nodes {
            name ,
            commitComments {
              totalCount 
            }
              stargazers(first:5) {
              nodes {
                name 
              }
            }
          }
        }
    }
  }
  `;
  const { loading, error, data } = useQuery(QUERY);
  useEffect(() => {
    console.log(state);
    console.log(QUERY);
  }, [state]);
  useEffect(() => {
    console.log(data);
  }, [data]);

  // if (error) return <p>Error :(</p>;

  return (
    <div className="u-body">
      <section className="u-clearfix u-section-1" id="sec-8bf7">
        <div className="u-clearfix u-grey-75 u-layout-wrap u-layout-wrap-1">
          <div className="u-layout">
            <div className="u-layout-row">
              <div className="u-container-style u-layout-cell u-palette-5-dark-1 u-size-4 u-layout-cell-1">
                <div className="u-container-layout u-container-layout-1">
                  <img
                    className="u-image u-image-default u-preserve-proportions u-image-1"
                    src="images/new_task_24dp2x.png"
                    alt=""
                    data-image-width="48"
                    data-image-height="48"
                  />
                  <img
                    className="u-image u-image-default u-preserve-proportions u-image-2"
                    src="images/notifications_24dp2x.png"
                    alt=""
                    data-image-width="48"
                    data-image-height="48"
                  />
                  <img
                    className="u-image u-image-default u-preserve-proportions u-image-3"
                    src="images/home_48dp2x.png"
                    alt=""
                    data-image-width="96"
                    data-image-height="96"
                  />
                  <img
                    className="u-image u-image-default u-preserve-proportions u-image-4"
                    src="images/search_24dp2x.png"
                    alt=""
                    data-image-width="48"
                    data-image-height="48"
                  />
                  <img
                    className="u-image u-image-default u-preserve-proportions u-image-5"
                    src="images/user_48dp2x.png"
                    alt=""
                    data-image-width="96"
                    data-image-height="96"
                  />
                </div>
              </div>
              <div className="main-container">
                <div className="container-1">
                  <div style={{alignSelf:"center"}}>
                    <h6>REPOSITORIES</h6>
                  </div>
                  {loading && <h2>loading...</h2> }
                  {!loading && data?.user?.repositories?.nodes?.map(
                    (item: any, idx: number) => (
                      <div
                        key={idx}
                        className="flex-item"
                        onClick={ () => {
                          setParentState({
                            owner : state.user ,
                            reponame : item.name ,
                            page : 1 ,
                          })
                          // setPage(1)
                        } }
                      >
                        {item.name}
                      </div>
                    )
                  )}
                </div>

                <div className="container-2">
                  <div>
                    <input type="text" onChange={ (e) => setState({...state,url:e.target.value})} />
                  </div>
                  <div>
                    <button onClick={() => setState({...state,user:state.url , url: ''})}>find repos now </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
