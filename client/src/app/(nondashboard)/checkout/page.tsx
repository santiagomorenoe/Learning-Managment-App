import Loading from '@/components/Loading'
import { useUser } from '@clerk/nextjs'
import { useCheckoutNavigation } from '@/hooks/useCheckoutNavigation'
import WizardStepper from '@/components/WizarStepper'

export const CheckoutWizard = () => {

    const { isLoaded } = useUser();
    const { checkoutStep } = useCheckoutNavigation();

    if (!isLoaded) return <Loading />;

    const renderStep = () => {
        switch (checkoutStep) {
            case 1:
                return "checkout details page";
            case 2:
                return "payment page";
            case 3:
                return "completion page";
            default:
                return "checkout details page";
        }
    }

    return (
        <div className="checkout">
            <WizardStepper currentStep={checkoutStep} />
            <div className="checkout__content">
                {renderStep()}
            </div>

        </div>
    )
}
