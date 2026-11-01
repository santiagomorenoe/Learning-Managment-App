import { useSearchParams } from 'next/navigation'
import { useCurrentCourse } from '@/hooks/useCurrentCourse';
import Loading from '@/components/Loading';
import CoursePreview from '@/components/CoursePreview';

function CheckoutDetailsPage() {


    const { course: selectedCourse, isLoading, isError } = useCurrentCourse();
    const searchParams = useSearchParams();
    const showSignUp = searchParams.get("showSignUp") === "true";

    if (isLoading) return <Loading />;
    if (isError) return <div>Error loading course</div>;
    if (!selectedCourse) return <div>Course not found</div>;

    return (
        <div className="checkout-details">
            <div className="checkout-details__container">

                <CoursePreview course={selectedCourse} />
            </div>

        </div>
    )
}

export default CheckoutDetailsPage