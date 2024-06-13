import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";

import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { IoSend } from "react-icons/io5";
import { Modal } from "antd";

const SinglePost = () => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShowModal, setShowModal] = useState(false);
  const [comments, setComments] = useState([]);
  const { handleSubmit, register, reset } = useForm();

  const showModal = () => {
    setShowModal(true);
  };
  const handleOk = () => {
    setShowModal(false);
  };
  const handleCancel = () => {
    setShowModal(false);
  };

  const handleLike = () => {
    setLike(true);
    setLikeCount(likeCount + 1);
  };

  const onSubmit = async (formData, e) => {
    e.preventDefault();
    setComments([formData.comment,...comments ]);
    reset();
  };

  return (
    <div className="w-[400px] h-[500px] mt-[50px]">
      <div className="post-headerSection bg-black flex justify-start items-center gap-4 w-full px-5 py-3">
        <div className="">
          <img
            src="https://fastly.picsum.photos/id/515/200/200.jpg?hmac=d6WMJkHOOB7pT-6y_yjHKrJdVp3v17ry6bMzGVuyb68"
            alt="profile"
            className="rounded-full max-w-[30px] max-h-[30px]"
          />
        </div>

        <div className="text-white">colamanz</div>
      </div>
      <div className="post-imageSection">
        <img
          src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="post"
          className=" w-full object-contain"
        />
      </div>
      <div className="post-functionalitySection">
        <div className="bg-black flex justify-between items-center py-3 px-6">
          <button>
            <div className="relative">
              <FaHeart
                className={`${like ? "fill-red-600" : "fill-white"}`}
                onClick={handleLike}
                size={20}
              />
              <div
                className={`${
                  likeCount === 0 ? "hidden" : ""
                } text-white px-1 py-[1px] rounded-full text-[6px]  `}
              >
                {likeCount}
              </div>
            </div>
          </button>
          <div>
            <button
              onClick={() => {
                setIsModalOpen(!isModalOpen);
              }}
            >
              <FaRegCommentDots className=" fill-white" size={20} />
            </button>
          </div>
          <button onClick={showModal}>
            <AiOutlineSend className="fill-white" size={20} />
          </button>

          <BsThreeDotsVertical className="fill-white" size={20} />
        </div>
      </div>
      <div className={`${isModalOpen ? "block" : "hidden"}`}>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between items-center mt-10">
            <input
              id="comment"
              {...register("comment")}
              type="text"
              placeholder="Add a comment..."
              className="w-full h-10  bg-opacity-0 px-2 py-1 mr-2 text-white rounded-lg"
            />
            <button
              type="submit"
              onClick={() => {
                setIsModalOpen(false), reset;
              }}
            >
              <IoSend size={30} className="fill-white"/>
            </button>
          </div>
        </form>
      </div>
      <Modal
        open={isShowModal}
        onOk={handleOk}
        onCancel={handleCancel}
        onClose={handleCancel}
      >
        <div>share</div>
      </Modal>

      <div className={`w-full bg-white  mt-[80px] flex flex-col gap-y-1 max-h-[150px] overflow-scroll commentsSection ${comments.length==0 && 'h-0 p-0 hidden'} py-10 px-10`}>
        {comments.map((comment, index) => (
          <div
            className=" bg-slate-200 rounded-md text-black-200 flex justify-start items-center gap-4 mt-[10px]  px-2 py-4"
            key={index}
          >
            <div>
              <img
                src="https://fastly.picsum.photos/id/515/200/200.jpg?hmac=d6WMJkHOOB7pT-6y_yjHKrJdVp3v17ry6bMzGVuyb68"
                alt="profile"
                className="rounded-full max-w-[30px] max-h-[30px]"
              />
            </div>

            <div>{comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePost;
