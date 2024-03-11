import PopupController from "../../components/Popup/PopupController";

const ListView = ({ posts, selectedUser, setSelectedUser }) => {
  console.log(selectedUser);
  return (
    <div className="h-screen text-white container-sm px-5 py-5 md:px-40 lg:px-52">
      <h1>
        GÜnderi Sayısı: <span className="font-bold">{posts.length}</span>
      </h1>

      {posts.length === 0 ? (
        <p>Yüklenıyor</p>
      ) : (
        posts.map((post) => (
          <div
            className=" bg-black rounded-md my-5 p-5 shadow shadow-gray-400 cursor-pointer transition hover:shadow-white"
            key={post.id}
          >
            <div className="flex justify-between">
              <h3>{post.title}</h3>
              <p
                onClick={() => {
                  setSelectedUser(post.user);
                }}
                className="text-yellow-500"
              >
                {post.user}
              </p>
            </div>
            <p>{post.text}</p>
          </div>
        ))
      )}
      {/* bir kullanici secilirse ekrana onun gonderilerini bastigimiz pencere ac*/}
      {selectedUser && (
        <PopupController
          user={selectedUser}
          close={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default ListView;
