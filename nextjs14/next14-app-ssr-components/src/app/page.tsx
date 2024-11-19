import { AddTags } from "./components/AddTags";
import { Dialog } from "./components/Dialog";
import { Tags } from "./components/tags";
import { DialogProvider } from "./contexts/DialogContext";


export default function Home() {
  
  return (
    <DialogProvider>
      <h1 className="text-2xl text-orange-700">Hello World from NextJS 14 App</h1>
      <Tags />
      <AddTags />
      {/* <Suspense fallback={<p>Loading...</p>}>
        <GithubUser username="diego3g"/>
      </Suspense> */}
      <Dialog />
    </DialogProvider>
  );
}
