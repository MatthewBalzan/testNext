import { useRouter } from 'next/router'

export default function Car({car}){

    const router = useRouter()
    const { id } = router.query

    return <h1>Hello {car.message} with { id }</h1>
}

export async function getServerSideProps({ params }){
    const req = await fetch('https://0tk1c968qb.execute-api.eu-central-1.amazonaws.com/staging/first-endpoint');
    const data = await req.json();

    return {
        props:{car:data},
    }
}