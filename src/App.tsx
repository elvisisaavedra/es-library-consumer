import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogContent,
  DialogIlustration,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
  Accordion,
  AccordionItem,
} from 'es-library-ui'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" style={{ margin: '20px' }}>
            Open Dialog
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogIlustration>
            <img src={reactLogo} alt="alert icon" />
          </DialogIlustration>
          <DialogTitle>Basic dialog title</DialogTitle>
          <DialogDescription>
            A dialog is a type of modal window that appears in front of app
            content to provide critical information, or prompt for a decision to
            be made.
          </DialogDescription>
          <DialogFooter>
            <Button variant={'secondary'} type="button">
              Button
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <hr />
      <Accordion type="single" defaultValue={'item-1'}>
        <AccordionItem title="Title" subtitle="Supporting text" value="item-1">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionItem>
        <AccordionItem title="Is it unstyled?" value="item-2">
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionItem>
        <AccordionItem title="Can it be animated?" value="item-3">
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default App
