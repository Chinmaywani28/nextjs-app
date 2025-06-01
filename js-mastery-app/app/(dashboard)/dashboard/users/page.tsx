import Link from "next/link"

// export default function Users() {
//   return (
//     <>
//     <h1>Hello there Users!</h1>
//     <div>
//         <div>Dashboard users</div>
//         <ul>
//             <li><link href="/dashboard/users/1"/> Users 1</li>
//             <li><link href="/dashboard/users/2"/>Users 2</li>
//             <li><link href="/dashboard/users/3"/>Users 3</li>
//             <li><link href="/dashboard/users/4"/>Users 4</li>
//         </ul>
//     </div>
//     </>
//   );
// }


const Page = () =>{
    return (
    <>
     <h1>Hello there Users!</h1>
     <div>
         <div>Dashboard users</div>
         <ul>
             <li><Link href="/dashboard/users/1">Users 1</Link></li>
             <li><Link href="/dashboard/users/2">Users 2</Link></li>
             <li><Link href="/dashboard/users/3">Users 3</Link></li>
             <li><Link href="/dashboard/users/4">Users 4</Link></li>
         </ul>
     </div>
     </>
    )
}

export default Page