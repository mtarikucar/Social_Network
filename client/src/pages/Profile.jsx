import { useState } from "react";
import ProfilePicture from "../components/Profile/ProfilePicture";
import { useParams} from "react-router-dom";
import { useSelector} from "react-redux";

import Posts from "../components/Posts";
import { useEffect } from "react";

import { publicRequest, userRequest } from "../requestMethods";
import { createModal, useModals } from "../utils/modal";
import Modal from "../modals";

function Profile() {
  const modals = useModals();
  const { id } = useParams();
  const auth = useSelector((store) => store.auth);

  const [profile, setProfile] = useState({});

  
  const getInfo = async () => {
    try {
      setProfile({});
      const url = `/users/${id}`;
      const response = await userRequest.get(url);
      setProfile(response.data.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, [id]);

  return (
    <>
      <main className="profile-page snap-y snap-mandatory h-screen overflow-hidden hover:overflow-scroll grid grid-cols-1 gap-6 mb-6 scrollbar-hide">
        <section className="relative py-16 bg-blueGray-200 snap-start">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      {profile.image_path ? (
                        <ProfilePicture imgpath={profile.image_path} url={profile.id}/>
                      ):
                      <ProfilePicture url={profile.id}/>}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center flex justify-center py-4 lg:pt-4 ">
                    <div className="py-6 px-3 sm:mt-0">
                      
                      {modals.length > 0 && <Modal />}
                      {auth.currentUser &&
                      profile.id === auth.currentUser.user.id ? (
                        <button
                          className="bg-gray-800 active:bg-gray-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:m-2 ss:m-2 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => createModal("editProfile")}
                        >
                          profile settings
                        </button>
                      ) : (
                        <button
                        className="bg-gray-800 active:bg-gray-900 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Follow
                      </button>
                      )}
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
                  {profile.phone_number && (
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                      {profile.phone_number}
                    </div>
                  )}

                  {profile.email && (
                    <div className="mb-2 text-blueGray-600 mt-10">
                      <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                      {profile.email}
                    </div>
                  )}
                  {profile.createdAt && (
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                      since:{profile.createdAt}
                    </div>
                  )}
                </div>
                {profile.bio && (
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          {profile.bio}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {auth.currentUser && profile.id === auth.currentUser.user.id ? (
                  <div className="w-full pt-5 mb-2">
                    <div className="flex">
                      <button
                        onClick={() => createModal("sharePost")}
                        className="font-bold py-2 px-4 rounded inline-flex items-center w-full justify-center bg-gray-800 hover:bg-gray-900 text-white"
                      >
                        send post
                      </button>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="snap-start">
            <Posts userId={profile.id} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
