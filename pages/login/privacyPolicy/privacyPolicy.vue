<template>
	<view class="privacyPolicy">
		<view class="title">
			<view class="titleContent" style="height: 100%; width: 100%;">privacyPolicy</view>
		</view>
		<scroll-view class="content" scroll-y>
			<view class="privacyPolicy-content">
				Dr. Little’s vision is to make healthcare more efficient and effective through machine learning
				technology, connected care, and research products.
				Naturally, this involves working with data that is important to a hospital. We appreciate the trust
				placed in us to protect patient’s privacy. Please carefully read this “privacy policy” before using our
				services.
				This Privacy Policy applies to data collected or processed by the Dr. Little system via X hospital and
				alliances devices, applications, software, websites, APIs, and our general dealings with customers
				through email and other forms of communication regarding our products and services and also our future
				services (the “Services”).
				This policy is not applied to the data collected from outside of our system, for example, such as data
				collected by other applications and websites within each hospital.
				This policy is a part of the agreement in using our application and receiving treatments at X hospital.
				By using our application, we assume that you have read and agreed with this policy. This policy explains
				what data we collect, how we use it, and the measures we take to keep the data safe. The details about
				this policy will be described as followed.
				For your medical records, apart from this policy, we will strictly comply with governmental regulations
				on how we handle it.

				What kind of data do we collect from patients?
				We collect data from patients to track medical treatments and services (this includes preventing and
				following up symptoms).
				The data we collect is general data and patient data (medical records) essential for medical services.
				Patients data is data that can identify both directly and indirectly, for example,
				data that could identify patient, such as name, gender, date of birth, and identification number
				data concerning patients contact such as an address, phone number, and email
				data concerning patients emergency contact such as relationship and contact number of a person hospitals
				could contact in case of emergency
				data concerning patient physical and mental health
				data concerning patient allergy of medicines/ food and their side effects
				data concerning patient feedbacks and comments
				data concerning patients diagnosis (for medical personnel users)
				data concerning patient activity log on our application (for medical personnel users)

				Why data matter to us?
				It is essential to collect, update, process, and use patient data to provide our services continuously.
				Our services will include informing patient diagnosis results, providing data concerning patient
				interests, improving the accuracy of software we use to facilitate diagnosis and legal purposes.
				This policy will collect, store, update, process, and make use of data (personal data, X-ray pictures,
				and other relevant data) for medical education and treatments, application improvement, and increasing
				the accuracy of our software and the ML diagnosis model.

				How long would we keep patient data?
				We will keep patient personal data for at least five years since we collect the data or make
				adjustments/updates. We expect that within this timeframe, we would be able to aid a diagnosis
				ultimately. However, we may keep the data longer than the expected five years if a patient is still
				ongoing diagnosis or the laws allow us to keep their data. Your data will be deleted from our database
				after the set timeframe.

				Who has access to patient data?
				Only us and X hospital have access to patient data. To protect the anonymity of this data, we do not
				send the third parties’ analytics companies any data that identifies the patients. The third parties
				with whom we share data include our medical alliances and cloud computing providers. We may need to
				reveal data for legal purposes, which we would inform X hospital every time before handing the data to
				responsible governmental officials.

				How do we secure data?
				We value privacy and will always do our best to protect data. Pattern Health products are designed for
				use by healthcare organizations subject to the privacy and security standards defined by the U.S. Health
				Insurance Portability and Accountability Act (HIPAA) and the E.U. General Data Protection Regulation
				(GDPR) 2016/679. We will store our data by using a cybersecurity company Cloudflare to ensure optimal
				precautions are taken into account.
				Additionally, we provide physical, electronic, and procedural safeguards to protect the data we process
				and maintain. For example, we limit access to authorized employees and contractors who need to know data
				to operate, develop or improve our products. Please be aware that, although we endeavor to provide
				excellent security for the data we process and maintain, no security system can prevent all potential
				security breaches. Should a breach occur, the hospital will be notified within a reasonable time via
				email and a prominent notice on our website.
				Future development of our system will incorporate blockchain to decentralize information so that data
				will not be tied back to the patient. We need to utilize the data to train our ML diagnosis model;
				however, we want to take the necessary steps to anonymize the scans.

				Changes
				This Privacy Policy may be updated from time to time for undisclosed reasons. We will notify the
				hospital of any changes to our Privacy Policy by posting the new Privacy Policy to
				https://doctorlittle.org/ and informing via email or within the appliaction. Hospitals are advised to
				consult this Privacy Policy regularly for any changes.

				What are user rights?
				Hospital has the right to access the data, ask for copies, and update the data.
				Hospital has the right to oppose, suspend, and revoke its consent regarding our collection, use, and
				data revelation.
				Hospital has the right to delete, destroy, and reveal the source of data.

				However, we assume that by suspending and revoking consent, X hospital recognizes that it might affect
				its access to our services and the quality of treatments received within our system.

				Your Consent
				Dr Little and X hospital are the controllers of patient data provided to us, which means determining the
				purposes and how personal data is processed.
				Using our Services, X hospital is consenting to our processing of user-provided and automatically
				collected data. “Processing” means using data in any way, including, but not limited to, collecting,
				storing, deleting, combining, and disclosing data, all of which activities will take place in Kenya. If
				X hospital resides outside Kenya, the data will be transferred to Kenya and processed and stored there.
				Using our products and providing data to us, you consent to such transfer to and processing in Kenya.
			</view>
		</scroll-view>
		
		
		<view class="wrapp">
		
			
			<navigator url="/pages/login/register/register" style="height: 100%; width: 80%;">
						<view class="privacyPolicy-button" @click="onAgree">同意</view>
			</navigator>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		methods: {
			onAgree() {
				// 点击同意按钮的操作，可以在这里做相应的处理，如保存用户同意状态等
			},
		},
	}
</script>

<style scoped lang="scss">
	.privacyPolicy {
		width: 100vw;
		height: 94vh;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		/*  padding: 20rpx; */
		background-color: #fff;
	}

	.title {
		font-size: 28rpx;
		font-weight: bold;
		margin-bottom: 20rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 2vh;
		background-color: #fff;

		.titleContent {
			padding-top: 10rpx;
			padding-left: 30rpx;
		}
	}

	.content {
		flex: 1;
		max-height: 80vh;
		padding: 20rpx;
		border: 1rpx solid #ccc;
		border-radius: 6rpx;
		overflow: auto;
		background-color: #fff;
	}

	.privacyPolicy-content {
		font-size: 24rpx;
		line-height: 1.5;
		color: #333;
	}

	.wrapp {
	display: flex;
	justify-content: center;
	
		.privacyPolicy-button {
		width: 70vw;
		background: #8AEEEE;
		border-radius: 60rpx;
		color: #000000;
		font-weight: 600;
		font-family: Montserrat;
		height: 120rpx;
		
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		}
	}
</style>