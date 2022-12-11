import { useParams } from "react-router-dom";

const BoardContent = () => {
  const params = useParams();

  console.log(params.id)
  return <div className="board-content-container">
    this is board {params.id} content
  </div>
}

export default BoardContent;