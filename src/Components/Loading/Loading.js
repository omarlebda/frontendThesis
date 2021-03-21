import { CircularProgress } from "@material-ui/core";

export default function Loading() {
    return (
        <div className='flex_col' style={{height:'100vh'}}> <CircularProgress color="secondary" size={70} /></div>
    )
}
