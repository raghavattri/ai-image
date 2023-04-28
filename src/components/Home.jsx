import React from 'react'
import { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../firebase-config';
import DisplayPost from './DisplayPost';
import { CircularIndeterminate } from "../loadanimation";
import FormField from "./FormField"

const Home = () => {
  const [posts, setPost] = useState([])
  const [loading, setLoading] = useState(true);
  const postRef = collection(db, "posts")

  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = posts.filter((item) => item.user.toLowerCase().includes(searchText.toLowerCase()) || item.prompt.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedResults(searchResult);
      }, 500),
    );
  };

  useEffect(() => {
    setLoading(true)
    const getPost = () => {
      getDocs(postRef)
        .then(data => {
          setPost(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
          setLoading(false)
        })
    }
    getPost()
  }, [])
  return (
    <section>
      < div className='sample-box'>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Generated Samples</h1>
        <p className="m-2 text-[#666e75] text-[14px] ">Browse through the Automated generated  art</p>
        <FormField
          labelName="Search posts"
          type="text"
          name="text"
          placeholder="Search something..."
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      <div className="my-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <CircularIndeterminate />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing Resuls for <span className="text-[#222328]">{searchText}</span>:
              </h2>
            )}
            <div className="home-display">
              {searchText && searchedResults ? (
                searchedResults.map(post=>(
                <DisplayPost
                  post={post}
                />
                ))
              ) : (posts.map(post=>(
                <DisplayPost
                  post={post}
                />
                ))
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Home

