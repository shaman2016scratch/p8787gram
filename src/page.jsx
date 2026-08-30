const Page = ({url}) => {
    return (
        <div>
            {(url === "") ? (
                <h1>P878Gram</h1>
            ) : null}
        </div>
    )
}

export default Page