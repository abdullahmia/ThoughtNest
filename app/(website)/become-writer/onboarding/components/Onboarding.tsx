'use client'

import { ProgressBar } from '@/app/components/ui/progressBar'
import { useMemo, useState } from 'react'
import Greeting from './Greeting'

const MAX_STEPS = 6

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState<number>(1)

  const percent = useMemo(() => {
    return currentStep / MAX_STEPS
  }, [currentStep])

  const skipStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const doLater = async () => {
    setCurrentStep(4)
  }

  const next = () => {
    if (currentStep < MAX_STEPS) {
      setCurrentStep((value) => value + 1)

      return
    }
  }

  const done = async () => {
    // TODO: Add logic to save user data
  }

  return (
    <div className="flex h-full w-full flex-col py-10">
      {/* bg-slate-50 */}
      <div className="mx-auto flex items-center justify-center gap-3 lg:w-1/2">
        <div className="w-2/3">
          <ProgressBar progress={percent} barColor="bg-brand-dark" height={2} />
        </div>
        <div className="w-1/3">
          {currentStep < 5 ? (
            <>{Math.floor(percent * 100)}% complete</>
          ) : (
            <>Almost there!!</>
          )}
        </div>
      </div>

      <div className="flex grow items-center justify-center">
        {currentStep === 1 && (
          <Greeting
            next={next}
            skip={doLater}
            name={'Abdullah Mia'}
            session={null}
          />
        )}
      </div>
    </div>
  )
}
