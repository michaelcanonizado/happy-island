'use client';

import { screenBreakpoints } from '@/helpers/screen-breakpoints';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

const Bento = () => {
	const targetRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start 75%', 'start 20%'],
	});

	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

	return (
		<motion.section
			ref={targetRef}
			className={cn(
				'relative flex flex-col items-center mx-auto w-full px-6 pt-[150px]',
				screenBreakpoints
			)}
		>
			{/* <div className="absolute top-0 w-full h-[20px] bg-red-700"></div> */}
			<BentoHeader />
			<div>
				<p className="text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Suspendisse efficitur eu ex at accumsan. Vivamus et urna sit amet
					augue feugiat convallis non efficitur ante. Nullam eget suscipit
					ligula. Sed volutpat lectus a ligula auctor, ut sodales magna
					condimentum. Maecenas pellentesque nisi porta, vulputate tellus
					ut, varius velit. Pellentesque congue rutrum elementum. Praesent
					massa enim, eleifend at consectetur non, elementum in lorem.
					Vivamus maximus dolor ut lobortis bibendum. Sed rutrum nibh
					mauris, vel cursus tortor elementum in. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit. Mauris tincidunt metus tellus,
					sed tincidunt mauris tempus non. In rhoncus, quam at sollicitudin
					lobortis, neque metus porttitor dui, non lobortis est urna in
					ligula. Vestibulum ullamcorper vel turpis ac tincidunt. Sed et
					felis accumsan, ornare ligula tincidunt, sagittis augue. Integer
					velit ante, tempor vel lacus finibus, scelerisque placerat orci.
					Quisque ac lorem feugiat, tempor ex id, porttitor ligula. Proin
					pharetra, lorem lacinia vulputate efficitur, dolor orci aliquam
					nulla, a congue est libero et sem. Ut sed sapien ac purus
					lobortis dapibus. Nam accumsan nunc ut eleifend aliquet. Sed sit
					amet odio a purus auctor consectetur in elementum lorem. Cras sit
					amet lobortis quam. Nunc luctus neque eu nunc dapibus, non
					condimentum sem fermentum. Nam dictum leo nunc, eu dapibus sem
					sodales vitae. Sed quis quam a orci congue laoreet. Fusce
					facilisis sollicitudin purus eu ullamcorper. Vivamus sit amet
					laoreet felis, sit amet tempus dui. Aenean rutrum ut erat non
					consequat. Maecenas elementum ex nulla, sit amet lacinia odio
					pharetra eu. In vitae felis iaculis dui elementum congue in quis
					nibh. Aliquam erat volutpat. In eu elit elit. In quam nulla,
					gravida ut eleifend eu, pharetra vitae mi. Nulla et ligula
					iaculis, scelerisque enim vel, congue sapien. Integer faucibus
					risus in quam aliquet rutrum. Quisque scelerisque, justo sed
					aliquam maximus, mauris ipsum tincidunt urna, ut posuere elit
					magna nec purus. Donec faucibus sem at lobortis faucibus. Fusce
					sodales commodo leo imperdiet tincidunt. Duis ac porta augue.
					Phasellus porttitor dapibus egestas. Quisque aliquet mattis
					lectus, quis facilisis ligula pharetra viverra. Phasellus lacinia
					ut purus a tincidunt. Suspendisse tempus velit odio, eget
					tristique nibh porta id. In id blandit tellus, vel dictum nulla.
					Duis condimentum elementum turpis, id imperdiet turpis ultricies
					non. Sed sollicitudin malesuada commodo. Proin sed lorem aliquam,
					interdum lacus vitae, bibendum tellus. Quisque at neque vel sem
					porttitor porttitor. Maecenas id accumsan velit. Duis egestas
					erat non ligula varius malesuada. Quisque accumsan nisl aliquam
					libero tempor fermentum. In lobortis eu erat ut ullamcorper.
					Vivamus id ornare felis. Aenean enim est, efficitur a sapien
					quis, dictum cursus lorem. Curabitur ac placerat felis. Aliquam
					id egestas ex, quis malesuada ligula. Maecenas pharetra commodo
					neque, at tempor augue. Sed id est sed lectus luctus placerat in
					eu felis. In pharetra justo eu iaculis rhoncus. Orci varius
					natoque penatibus et magnis dis parturient montes, nascetur
					ridiculus mus. Pellentesque nulla magna, elementum at enim vel,
					malesuada tincidunt eros. Morbi egestas efficitur nisl, quis
					semper quam molestie nec. Etiam mattis felis justo, eu hendrerit
					tellus varius et. Phasellus non iaculis ante, vitae tristique
					dui. Vivamus id metus porta, cursus sem ut, sollicitudin libero.
					Ut at scelerisque orci. Suspendisse aliquam, ex convallis
					suscipit maximus, arcu nisl ultrices tellus, a porta metus lacus
					at lacus. Duis nec lectus rutrum, pretium magna eget, suscipit
					mi. Fusce in mauris at sapien posuere finibus ac eu ex. Etiam
					luctus nibh ac ex semper elementum. Nunc justo purus, efficitur
					eget tristique eu, consequat non quam. Vestibulum non nisi nec mi
					commodo interdum vel vel diam. Aliquam pharetra porttitor est
					eget malesuada. Integer congue libero tellus, sit amet
					consectetur nibh interdum sit amet. Morbi et leo eget ipsum
					scelerisque ullamcorper. Proin aliquam, odio eget fringilla
					sagittis, purus purus rutrum lorem, ut aliquam lectus odio ac
					magna. Nunc eget dui feugiat, aliquam dolor eu, mattis lorem.
					Aenean aliquam, arcu ac fermentum mollis, elit sem congue nisl,
					sed cursus urna felis eget turpis. Curabitur massa ligula,
					eleifend feugiat ultrices nec, iaculis sed leo. Donec convallis
					dui vitae orci scelerisque finibus. Cras rhoncus aliquam ligula
					in congue. Nunc vulputate placerat sem, non hendrerit lacus
					iaculis quis. Sed est dolor, hendrerit at mattis nec, maximus ac
					erat. Pellentesque aliquet hendrerit ultricies. Sed vehicula eros
					quis turpis facilisis tristique. Duis aliquet non sapien ut
					tristique. Nunc ultrices arcu eu luctus posuere. Vivamus
					elementum congue ligula, sed condimentum erat. Praesent consequat
					diam turpis, et molestie orci volutpat eu. Nunc ante tortor,
					tempus a nisl ultrices, elementum condimentum nisi. Nullam quis
					porta magna, non molestie arcu. Sed egestas imperdiet tempus.
					Nunc tempus nibh in vulputate elementum. In tincidunt nisl vel
					ultricies congue. In lobortis eros nec sapien hendrerit
					facilisis. Fusce efficitur arcu et lacus fermentum convallis.
					Proin pharetra sed purus at vehicula. Maecenas dignissim
					imperdiet tempor. Fusce viverra justo vel tincidunt mollis.
					Vestibulum tempor odio augue, at congue ligula efficitur non.
					Donec non pharetra nibh. Curabitur efficitur nunc sem, quis
					tempor erat venenatis eu. Ut suscipit elit eu eros sollicitudin
					mollis. Cras ac cursus lorem. Vivamus arcu urna, aliquam ut
					aliquam vitae, tincidunt at enim. Aenean a bibendum mi, nec
					luctus libero. Morbi leo augue, sodales nec malesuada ac, mattis
					ut justo. Proin id velit consectetur, pellentesque nulla vel,
					hendrerit urna. Vestibulum pharetra nibh et felis pellentesque
					luctus. Fusce posuere elit in iaculis cursus. Integer non rutrum
					est, eu sagittis felis. Cras et tellus vitae diam semper
					efficitur. Fusce eget erat nec elit scelerisque rhoncus. Integer
					pellentesque diam nisl, eu elementum arcu molestie vel. Nulla
					facilisi. Suspendisse id augue risus. Cras consectetur nunc
					lacus. Sed euismod massa a ante condimentum, eget aliquet odio
					imperdiet. Aenean odio magna, aliquet ac purus fermentum, mattis
					ornare libero. Ut pellentesque risus ultrices, mollis urna et,
					vulputate enim. Mauris id egestas nibh. In nisi nisi, viverra sed
					massa nec, imperdiet sollicitudin tortor. Nullam mattis dui id
					metus venenatis vehicula.
				</p>
			</div>
		</motion.section>
	);
};

const BentoHeader = () => {
	return (
		<div className="flex flex-col items-center relative w-[175px] h-[200px] mb-12">
			<motion.div
				className="absolute inset-0 "
				initial={{ y: 100 }}
				whileInView={{ y: 0 }}
			>
				<Image
					src="/home/catanduanes-official-seal.png"
					fill
					alt="Catanduanes Official Seal"
					style={{
						objectFit: 'contain',
						objectPosition: 'center',
					}}
				/>
			</motion.div>
			<motion.div
				className="absolute bottom-0 w-full pt-[50px] flex justify-center bg-gradient-to-t from-background  to-transparent"
				initial={{ y: 100 }}
				whileInView={{ y: 0 }}
			>
				<h2 className="text-4xl font-semibold">Discover</h2>
			</motion.div>
		</div>
	);
};

export default Bento;
