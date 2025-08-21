const Comment = ({ com }) => {
    const { comment, commentUser, commentUserPhoto } = com;
    return (
        <div className="flex items-center gap-3">
            <div >
                <img className="size-10 rounded-full object-cover object-center border-2" src={commentUserPhoto} alt="user" />
            </div>
            <div>
                <h4 className="text-lg font-bold">{commentUser}</h4>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default Comment;