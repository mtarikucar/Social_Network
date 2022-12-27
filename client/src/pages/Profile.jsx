import { useState } from "react";
import ProfilePicture from "../components/Profile/ProfilePicture";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Post from "../components/Post";
import { useEffect } from "react";

import { publicRequest } from "../requestMethods";

function Profile() {
  const { id } = useParams();
  const auth = useSelector((store) => store.auth);

  const dispatch = useDispatch();
  const [profile, setProfile] = useState(null);

  const getInfo = async () => {
    if(auth.currentUser !== null){

      const config = {
        headers: {
          Authorization: "Bearer " + auth.currentUser.token,
        },
      };
    }
    try {
      const url = `/users/${id}`;
      const response = await publicRequest.get(url, config);
      setProfile(response.data.data.user);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      { profile &&
        <main className="profile-page snap-y snap-mandatory h-screen overflow-hidden hover:overflow-scroll grid grid-cols-1 gap-6 mb-6 scrollbar-hide">
          <section className="relative py-16 bg-blueGray-200 snap-start">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <ProfilePicture imgpath={profile.image_path} />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center flex justify-center py-4 lg:pt-4 ">
                      <div className="py-6 px-3 sm:mt-0">
                        <button
                          className="bg-gray-800 active:bg-gray-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                          type="button"
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-2 lg:pt-4">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            15
                          </span>
                          <span className="text-sm text-blueGray-400">
                            follower
                          </span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            10
                          </span>
                          <span className="text-sm text-blueGray-400">
                            influence
                          </span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            89
                          </span>
                          <span className="text-sm text-blueGray-400">
                            following
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {profile.profile_name}
                    </h3>
                    { profile.phone_number &&
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                      {profile.phone_number}
                    </div>
                    }

                    <div className="mb-2 text-blueGray-600 mt-10">
                      <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                      University of Computer Science
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Voluptatem ipsam dolorum officia rerum? Ipsa eum
                          molestias quasi, est amet debitis cumque beatae saepe
                          impedit!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="snap-start">
              <div className="flex w-full">
                <div className="container mx-auto ">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 scrollbar-hide">
                    <div className="snap-start ">
                      <Post />
                    </div>
                    <div className="snap-start">
                      <Post />
                    </div>
                    <div className="snap-start">
                      <Post />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      }
    </>
  );
}

export default Profile;
