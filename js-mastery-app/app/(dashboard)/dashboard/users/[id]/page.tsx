const Page = ({params} : {params : { id: string}} ) =>{

    const {id} = params
    return (
        <div className="text-3xl">Users details: {id}</div>
    )
}

export default Page

