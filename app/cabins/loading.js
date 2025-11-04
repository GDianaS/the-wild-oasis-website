// será válido para todo o seguimento de rotas cabins e seus filhos ([cabinId])
import Spinner from "@/app/_components/Spinner";

export default function Loading(){
    return(
        <div className="grid items-center justify-center">
            <Spinner/>
            <p className="text-xl text-primary-200">Loading cabins data...</p>
        </div>
    );
}