import { cn } from '@/lib/utils'
import React from 'react'
import { CheckCircle } from 'lucide-react'

function WizarStepper({ currentStep }: WizardStepperProps) {
    return (
        <div className="wizard-stepper">
            <div className="wizar-stepper_container">
                {[1, 2, 3].map((step, idx) => (
                    <React.Fragment key={idx}>
                        <div className="wizard-stepper__step">
                            <div className={cn("wizard-stepper__circle", {
                                "wizard-stepper__circle--completed": currentStep > step || (currentStep === 3 && step == 2),
                                "wizard-stepper__circle--current": currentStep === step && step !== 3,
                                "wizard-stepper__circle--upcoming": currentStep < step,
                            })}>
                                {currentStep > step || (currentStep === 3 && step === 3) ? (
                                    <CheckCircle className="w-5 h-5" />
                                ) : (
                                    <span className="">{step}</span>
                                )}
                            </div>
                            <p className={
                                cn("wizard-stepper__text", {
                                    "wizard-stepper__text--active": currentStep >= step,
                                    "wizard-stepper__text--inactive": currentStep < step
                                })
                            }>
                                {step === 1 && "Details"}
                                {step === 2 && "Payment"}
                                {step === 3 && "Completion"}
                            </p>
                        </div>
                        {idx < 2 && (
                            <div className={cn("wizard-stepper", {
                                "wizard-stepper__line--completed": currentStep > step || (currentStep === 3 && step == 2),
                                "wizard-stepper__line--incomplete": currentStep < step,
                            })}
                            ></div>
                        )}
                    </React.Fragment>
                ))}
            </div>

        </div>
    )
}

export default WizarStepper