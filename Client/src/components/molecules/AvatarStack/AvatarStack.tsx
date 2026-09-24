const avatars = [47, 12, 32, 5];

export default function AvatarStack() {
  return (
    <div className="flex -space-x-2">
      {avatars.map((id) => (
        <img
          key={id}
          src={`https://i.pravatar.cc/60?img=${id}`}
          className="h-7 w-7 rounded-full border-2 border-white"
          alt=""
        />
      ))}
    </div>
  );
}